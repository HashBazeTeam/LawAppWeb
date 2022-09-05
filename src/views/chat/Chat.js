import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Joi from "joi";
import { LinkIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { MessageList, Input, Button, MessageBox } from "react-chat-elements";

import { LoadingIndicator } from "src/components";
import { saveImg } from "src/utils/function";
import {
  collection,
  query,
  where,
  onSnapshot,
  firestore,
} from "src/services/firebase";
import { selectors } from "src/store";
import { questionServices } from "src/services";

/**
 * Chat
 */
export default function Chat(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const screenHeight = window.innerHeight - 128; // Due to purge issue tailwind css doesn't detect variable change
  const question = props.location.state.question; // Get the question from the previous page

  // Selector
  const userID = useSelector(selectors.user.selectUserID);
  
  // States
  const [messages, setMessages] = useState([]);
  const [formData, setFormData] = useState("");

  useEffect(() => {
    const q = query(
      collection(firestore, "Question", question.questionID, "chat")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const chats = [];
      querySnapshot.forEach((doc) => {
        const chat = doc.data();
        const chatPosition =
          chat.author.id == question.clientID ? "left" : "right";

        // Get the chat type
        let chatType = "text";
        switch (chat.type) {
          case "image":
            chatType = "photo";
            break;
          case "file":
            chatType = "file";
            break;
          default:
            chatType = "text";
            break;
        }

        // Get the class name according to the side and data type
        let classNames = "py-2 text-black text-lg";
        if (chatPosition == "left") {
          if (chat.type == "image") {
            classNames += " mr-[60%]";
          } else {
            classNames += " mr-16";
          }
        } else {
          if (chat.type == "image") {
            classNames += " ml-[60%]";
          } else {
            classNames += " ml-16";
          }
        }

        const chatModel = {
          position: chatPosition,
          type: chatType,
          id: chat.id,
          date: new Date(chat.createdAt),
          className: classNames,
          // className: chatPosition == "py-2 mr-16 ",
          text: chat.text,
          title: "Client",
          data: {
            uri: chat.uri,
            className: "w-40",
            // uri: "https://picsum.photos/200",
            status: {
              click: false,
              loading: 0,
            },
          },
          onClick: (file) => {
            console.log(file);
          },
        };
        chats.push(chatModel);
      });
      setMessages(chats);
    });

    return unsubscribe;
  }, []);

  /**
   * Handlers
   */
  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  // Handle send btn pressed
  const handleSend = async (e) => {
    e.preventDefault();
    if(formData == "" || !formData) return;
    const msgTime = new Date().valueOf();
    const chat = {
      author: { id: userID },
      createdAt: msgTime,
      id: msgTime,
      type: "text",
      text: formData,
    };
    try {
      await questionServices.addChatToQuestion(question.questionID, chat);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle submit answer button
  const handleSubmitAnswerBtnPressed = () => {};

  return (
    <>
      <div
        className={`mb-4 columns-1 flex flex-col justify-between 
      h-screen bg-transparent overflow-y-scroll w-full`}
      >
        {/* <MessageList
          className="message-list m-1"
          lockable={true}
          toBottomHeight={"100%"}
          dataSource={messages}
          onDownload={(item) => { console.log(item) }}
          // onOpen={(item) => { console.log(item) }}
        /> */}
        <div className="w-full">
          {messages.map((message, index) => (
            <MessageBox
              className={message.className}
              key={message.id}
              position={message.position}
              type={message.type}
              text={message.text}
              data={{
                uri: message.data.uri,
                status: {
                  click: false,
                  loading: 0,
                },
                size: "small",
              }}
              onDownload={(item) => {
                saveImg(message.data.uri);
              }}
            />
          ))}
        </div>

        <div className="mb-0 mx-1 sticky bottom-0 grid grid-cols-8 align-middle justify-center">
          <div className="col-span-7">
            <Input
              className="m-1 p-1"
              value={formData}
              onChange={handleChange}
              placeholder="Type here..."
              multiline={true}
              rightButtons={
                <Button
                  color="white"
                  backgroundColor="black"
                  text="Send"
                  onClick={handleSend}
                />
              }
              leftButtons={
                <button
                  id="recaptcha-container"
                  disabled={false}
                  onClick={() => {}}
                  type="submit"
                  className={`group relative w-full flex justify-center py-1 px-4
                    border-transparent text-sm font-medium text-black 
                    `}
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LinkIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </button>
              }
            />
          </div>
          <div className="col-span-1 bg-red py-2 flex justify-center align-middle">
            <Button
              color="white"
              backgroundColor="green"
              text="Submit Answer"
              onClick={handleSubmitAnswerBtnPressed}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const sampleData = [
  {
    position: "left",
    type: "text",
    title: "User",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type 
    specimen book. It has survived not only five centuries, but also the leap into 
    electronic typesetting, remaining essentially unchanged. It was popularised in the 
    1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
    recently with desktop publishing software like
     Aldus PageMaker including versions of Lorem Ipsum.`,
    date: new Date("2022-08-24"),
    className: "py-2 ml-12",
  },
  {
    position: "left",
    type: "text",
    title: "User",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
     Aldus PageMaker including versions of Lorem Ipsum.`,
    date: new Date("2022-08-24"),
    className: "py-2 ml-12",
  },
  // {
  //   position: "left",
  //   type: "text",
  //   title: "Lawyer",
  //   text: "Can I know more details about the case?",
  //   date: new Date(),
  //   className: "py-2 mr-12",
  // },
  // {
  //   position: "left",
  //   type: "photo",
  //   title: "User",
  //   date: new Date(),
  //   className: "py-2 mr-12",
  //   data: {
  //     uri: "https://picsum.photos/200/200",
  //   },

  // },
  // {
  //   position: "left",
  //   type: "text",
  //   title: "Lawyer",
  //   text: "Can I know more details about the case?",
  //   date: new Date(),
  //   className: "py-2 mr-12",
  // },
  // {
  //   position: "left",
  //   type: "text",
  //   title: "Lawyer",
  //   text: "Can I know more details about the case?",
  //   date: new Date(),
  //   className: "py-2 mr-12",
  // },
];
