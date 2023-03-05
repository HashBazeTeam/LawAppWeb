import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Joi from "joi";
import { LinkIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { MessageList, Input, Button, MessageBox } from "react-chat-elements";
import { SystemMessage } from "react-chat-elements";
import CIcon from "@coreui/icons-react";
import { CButton } from "@coreui/react";
import { cilSearch } from "@coreui/icons";
import { QuestionStatus } from "src/models/types";

// Custom imports
import { LoadingIndicator, Modal } from "src/components";
import { saveImg } from "src/utils/function";
import {
  collection,
  query,
  where,
  onSnapshot,
  firestore,
  doc
} from "src/services/firebase";
import { selectors } from "src/store";
import { questionServices, userServices } from "src/services";
import { textSpanContainsTextSpan } from "typescript";

/**
 * Single Chat User Interface
 */
export default function Chat(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const screenHeight = window.innerHeight - 128; // Due to purge issue tailwind css doesn't detect variable changes.
  const question = props.location.state.question; // Get the question from the previous page.
  const inputRef = useRef(null);
  const scrollViewRef = useRef();
  const textRef = useRef();

  // Selector
  const userID = useSelector(selectors.user.selectUserID);

  // States
  const [messages, setMessages] = useState([]);
  const [formData, setFormData] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [fcmTokens, setFCMTokens] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(false);

  // Get messages from the firestore
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
          text: chat.text ? chat.text : chat.name,
          title: chatPosition == "left" ? "Client" : "Admin",
          data: {
            uri: chat.uri,
            className: "w-40",
            // uri: "https://picsum.photos/200",
            status: {
              click: false,
              loading: 0,
            },
          },
        };
        chats.push(chatModel);
      });
      setMessages(chats);
      if (chats.length > 0) {
        scrollToBottom();
      }

      questionServices.updateQuestion(question.questionID, {
        isReadAdmin: true, // When the admin come to the chat, seen status is changed.
      });
    });

    return unsubscribe;
  }, []);

  // Listen to question status
  useEffect(() => {
    const q = query(
      doc(firestore, "Question", question.questionID)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      // Make the submit answer button disabled if the question is answered
      if (querySnapshot.data().status == QuestionStatus.answered) {
        setShowSubmitButton(false);
      } else {
        setShowSubmitButton(true);
      }
    });

    return unsubscribe;
  }, []);

  // Get client details from the firestore
  useEffect(() => {
    const fetchData = async () => {
      const client = await userServices.getUserByID(question.clientID);
      console.log(client);
      const tokens = Object.values(client.fcmToken).filter(
        (token) => token != null && token != undefined && token != ""
      );
      setFCMTokens(tokens);
    };
    fetchData().catch((err) => {
      console.log(err);
    });
  }, []);

  // Scroll to the bottom of the chat
  // useEffect(() => {
  //   scrollToBottom();
  // }, [messages]);

  

  /**
   * Handlers
   */
  const handleAttachIconClick = () => {
    inputRef.current.click();
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const msgTime = new Date().valueOf();
    const TWENTY_MB = 1024 * 1024 * 20;

    if (file.size > TWENTY_MB) {
      toast.error("Max file size is 20MB");
      return;
    }
    // Check file type
    let fileType = "image";
    if (file.type.startsWith("image")) {
      fileType = "image";
    } else {
      fileType = "file";
    }

    const chat = {
      author: { id: userID },
      createdAt: msgTime,
      id: msgTime.toString(),
      type: fileType,
      name: file.name,
      size: file.size,
      height: 720,
      width: 1140,
      mimeType: file.type,
    };

    try {
      if (question.status == "Yet to be picked") {
        await questionServices.updateQuestion(question.questionID, {
          status: "Ongoing",
          isReadClient: false, // When a new msg is sent change the read status of client message
          adminID: userID,
        });
      } else {
        await questionServices.updateQuestion(question.questionID, {
          isReadClient: false, // When a new msg is sent change the read status of client message
          adminID: userID,
        });
      }

      await questionServices.addChatFileToQuestion(
        question.questionID,
        file,
        chat
      );
      await questionServices.sendChatNotification(
        fcmTokens,
        question.questionID
      );
    } catch (error) {
      console.log(error);
      toast.error("Error uploading file");
    }
  };

  // Handle send btn pressed
  const handleSend = async (e) => {
    e.preventDefault();
    if (formData == "" || !formData) return;
    const msgTime = new Date().valueOf();
    const chat = {
      author: { id: userID },
      createdAt: msgTime,
      id: msgTime.toString(),
      type: "text",
      text: formData,
    };

    try {
      if (question.status == "Yet to be picked") {
        await questionServices.updateQuestion(question.questionID, {
          status: "Ongoing",
          isReadClient: false, // When a new msg is sent change the read status of client message
          adminID: userID,
        });
      } else {
        await questionServices.updateQuestion(question.questionID, {
          isReadClient: false, // When a new msg is sent change the read status of client message
          adminID: userID,
        });
      }

      await questionServices.addChatToQuestion(question.questionID, chat);
      textRef.current.value = "";

      await questionServices.sendChatNotification(
        fcmTokens,
        question.questionID
      );
    } catch (error) {
      console.log(error);
    }
    scrollToBottom();
  };

  // Handle submit answer button
  const handleSubmitAnswerBtnPressed = async (e) => {
    // if (question.status == "Answered") return;
    setLoading(true);
    e.preventDefault();
    // If the status in assistance change the status.
    if (question.status == "Assistance") {
      try {
        await questionServices.updateQuestion(question.questionID, {
          status: "Ended",
        });
      } catch (error) {
        setLoading(false);
        toast.error(t("common_error"));
      }
    } else {
      try {
        setModalVisible(false);
        await handleSend(e);
        await questionServices.updateQuestion(question.questionID, {
          status: "Answered",
        });
        const msgTime = new Date().valueOf();
        const chat = {
          author: { id: userID },
          createdAt: msgTime,
          id: msgTime.toString(),
          type: "text",
          text: "Answered the question.",
        };
        await questionServices.updateQuestion(question.questionID, {
          isReadStatus: false,
          isReadClient: false, // When a new msg is sent change the read status of client message
        });
        await questionServices.addChatToQuestion(question.questionID, chat);
      } catch (error) {
        setLoading(false);
        toast.error(t("common_error"));
      }
      setModalVisible(false);
      setLoading(false);
    }
  };

  // When the question is answered and user want to answer again, enable the submit answer button
  const handleAnswerAgainBtnPressed = async (e) => {
    await handleSubmitAnswerBtnPressed(e);
    setModalVisible(false);
  };

  // Handle file/image download
  const handleFileDownload = async (fileURI, fileName) => {
    await saveImg(fileURI, fileName);
  };

  const scrollToBottom = () => {
    scrollViewRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClear = (e) => {
    console.log(e);
    e.target.value = "";
    return;
  };

  return (
    <>
      <div className="col-span-1 py-2 flex justify-center align-middle bg-slate-50">
        <Modal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          successCallback={(e) => handleAnswerAgainBtnPressed(e)}
          successLabel={t("resubmit")}
          title={t("resubmit_answer")}
          body={t("are_you_sure_you_want_to_resubmit")}
        />
        <CButton
          className=" text-md"
          color="primary"
          variant="outline"
          onClick={() =>
            history.push({
              pathname: "/law-admin/question/pool",
              state: {
                client: {
                  clientID: question.clientID,
                  clientName: question.clientName,
                },
              },
            })
          }
        >
          <CIcon icon={cilSearch} />{" "}
          <span className="text-sm">{t("show_previous_questions")}</span>
        </CButton>
      </div>
      <div
        className={`mb-4 columns-1 flex flex-col justify-between 
      h-screen bg-slate-50 overflow-y-scroll w-full`}
      >
        {/* <SystemMessage text={"Sample System message!"} /> */}
        <MessageList
          className="message-list m-1"
          lockable={true}
          toBottomHeight={"100%"}
          dataSource={messages}
          onDownload={(item) => handleFileDownload(item.data.uri, item.text)}
        />

        <div ref={scrollViewRef}></div>

        <div className="mb-0  mx-1 sticky bottom-0 grid grid-cols-8 align-middle justify-center ">
          <div className="col-span-8 ml-4 shadow border-b border-gray-200">
            <Input
              referance={textRef}
              className="m-1 p-1"
              defaultValue={formData}
              // clear={(e) => handleClear(e)}
              onChange={handleChange}
              placeholder="Type here..."
              multiline={true}
              
              rightButtons={
                <div>
                  <Button
                  className="mx-2 px-4"
                  color="white"
                  backgroundColor="black"
                  text="Send"
                  onClick={handleSend}
                  />
                  <Button
                    disabled={!showSubmitButton || formData == "" || !formData}
              className="px-4"
              color="white"
              backgroundColor={showSubmitButton ? "green" : "grey"}
              text={
                question.status == "Assistance"
                  ? t("finish")
                  : t("submit_answer")
              }
              onClick={(e) => {
                if (formData == "" || !formData) return;
                // If the button is disabled show the modal.
                if (!showSubmitButton) {
                  setModalVisible(true);
                } else {
                  setShowSubmitButton(false);
                  handleSubmitAnswerBtnPressed(e);
                }
              }}
            />

                  </div>
                
                
              }
              leftButtons={
                <button
                  id="recaptcha-container"
                  disabled={false}
                  onClick={handleAttachIconClick}
                  type="submit"
                  className={`group relative w-full flex justify-center py-1 px-4
                    border-transparent text-sm font-medium text-black 
                    `}
                >
                  <input
                    style={{ display: "none" }}
                    ref={inputRef}
                    type="file"
                    onChange={handleFileInputChange}
                  />
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LinkIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </button>
              }
            />
          </div>

          {/* <div className="col-span-1 py-2 flex justify-center align-middle">
            <Button
              className="px-4"
              color="white"
              backgroundColor={showSubmitButton ? "green" : "grey"}
              text={
                question.status == "Assistance"
                  ? t("finish")
                  : t("submit_answer")
              }
              onClick={(e) => {
                console.log(showSubmitButton);
                // If the button is disabled show the modal.
                if (!showSubmitButton) {
                  setModalVisible(true);
                } else {
                  setShowSubmitButton(false);
                  handleSubmitAnswerBtnPressed(e);
                }
              }}
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
