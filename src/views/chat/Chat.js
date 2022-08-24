import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Joi from "joi";
import { LockClosedIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { MessageList } from "react-chat-elements";

import { LoadingIndicator } from "src/components";
import { thunks } from "src/store";
import { auth } from "src/services/firebase";

/**
 *
 * @returns Chat
 */
export default function Chat(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  /**
   * Handlers
   */
  return (
    <>
      <MessageList
        className="message-list"
        lockable={true}
        toBottomHeight={"100%"}
        dataSource={[
          {
            position: "left",
            type: "text",
            title: "Kursat",
            text: "Give me a message list example !",
          },
          {
            position: "right",
            type: "text",
            title: "Emre",
            text: "That's all.",
          },
        ]}
      />
    </>
  );
}
