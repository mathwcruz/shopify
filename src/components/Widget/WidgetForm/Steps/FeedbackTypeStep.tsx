/* eslint-disable @next/next/no-img-element */
import { WidgetCloseButton } from "../../WidgetCloseButton";
import { FeedbackType } from "..";

import { feedbackTypes } from "utils/widget-feedback-types";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export const FeedbackTypeStep = ({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) => {
  return (
    <>
      <header>
        <span className="text-xl dark:text-gray-300 leading-6">
          Leave your feedback
        </span>
        <WidgetCloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes)?.map(([key, value]) => (
          <button
            key={key}
            type="button"
            className="bg-primary-300 dark:border dark:border-gray-300 dark:bg-dark-background rounded-lg w-24 py-5 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-primary-100 focus:border-primary-100 dark:hover:border-dark-background dark:focus:border-dark-background focus:outline-none"
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
          >
            <img
              src={`/assets/icons/${value.image.fileName}.svg`}
              alt={value.image.alt}
            />
            <span className="font-text">{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
};
