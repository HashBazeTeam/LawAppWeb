import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Joi from "joi";
import { LinkIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { MessageList, Input, Button } from "react-chat-elements";

import { LoadingIndicator } from "src/components";
import { thunks } from "src/store";
import { auth } from "src/services/firebase";

/**
 * Chat
 */
export default function Chat(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  // States
  const [message, setMessage] = useState("");

  /**
   * Handlers
   */
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <div className="mb-4">
        <MessageList
          className="message-list m-1"
          lockable={true}
          toBottomHeight={"100%"}
          dataSource={sampleData}
        />
        <div>
          <Input
            className="m-1 p-1"
            onChange={handleChange}
            placeholder="Type here..."
            multiline={true}
            rightButtons={
              <Button color="white" backgroundColor="black" text="Send" />
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
];
