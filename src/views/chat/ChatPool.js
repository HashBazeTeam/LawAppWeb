import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Joi from "joi";
import { LockClosedIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { ChatList } from "react-chat-elements";

import { LoadingIndicator } from "src/components";
import { thunks } from "src/store";
import {
  auth,
} from "src/services/firebase";

/**
 *
 * @returns Chat Pool section to display all the questions with title and date.
 */
export default function ChatPool(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  /**
   * Handlers
   */
  return (
    <>
      <ChatList
        className="chat-list"
        dataSource={[
          {
            avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
            alt: "kursat_avatar",
            title: "Kursat",
            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
            date: new Date(),
            unread: 3,
          },
        ]}
      />
    </>
  );
}
