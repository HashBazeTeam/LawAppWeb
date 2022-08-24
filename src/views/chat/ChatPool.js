import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Joi from "joi";
import { LockClosedIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { ChatList } from "react-chat-elements";

import { avatarURL } from "src/configs/constants";
import { LoadingIndicator } from "src/components";
import { thunks } from "src/store";
import { auth } from "src/services/firebase";
import { convertTZ } from "src/utils/function";

/**
 *
 * @returns Chat Pool section to display all the questions with title and date.
 */
export default function ChatPool(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [chatList, setChatList] = useState([]);

  // Fetch chat list from firebase
  useEffect(() => {}, []);

  /**
   * Handlers
   */
  return (
    <>
      <div className="mb-4">
        <ChatList
          className="chat-list"
          dataSource={sampleData}
          id="112321"
          onClick={(question) => {
            console.log(question);
            history.push({
              pathname: "/law-admin/question/chat",
              state: {
                questionID: question.id,
              },
            });
          }}
        />
      </div>
    </>
  );
}

const sampleData = [
  {
    avatar: avatarURL,
    alt: "kursat_avatar",
    title: `Real estate urgent case 1 - Yet to be picked`,
    subtitle: "Tharindu Maduranga, Canada",
    date: new Date(),
    unread: 1,
    key: "1",
    id: "12342",
    dateString: convertTZ(new Date()),
    className: "py-1",
  },
  {
    avatar: avatarURL,
    alt: "kursat_avatar",
    title: "Real estate urgent case 2 - Yet to be picked",
    subtitle: "Tharindu Maduranga, Austraila",
    unread: 3,
    key: "2",
    id: "234234322",
    dateString: convertTZ(new Date()),
    className: "py-1",
  },
  {
    avatar: avatarURL,
    alt: "kursat_avatar",
    title: "Real estate urgent case 3 - Yet to be picked",
    subtitle: "Tharindu Maduranga, Canada",
    dateString: convertTZ(new Date()),
    unread: 3,
    key: "3",
    id: "3354324534",
    className: "py-1",
  },
  {
    avatar: avatarURL,
    alt: "kursat_avatar",
    title: "Real estate urgent case 4 - Ongoing",
    subtitle: "Tharindu Maduranga, Canada",
    dateString: convertTZ(new Date()),
    unread: 3,
    key: "4",
    id: "43543245",
    className: "py-1",
  },
];
