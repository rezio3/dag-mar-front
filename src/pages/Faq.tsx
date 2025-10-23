import React, { useState } from "react";
import "../style/faq.scss";
import Question from "./faqComponents/Question";
import RedSection from "./faqComponents/RedSection";
import { questionData } from "./faqComponents/FaqAnswers";
import Question2 from "./faqComponents/Question2";
import Question3 from "./faqComponents/Question3";

export type QuestionsKeys =
  | "faqLine1Active"
  | "faqLine2Active"
  | "faqLine3Active"
  | "faqLine4Active"
  | "faqLine5Active"
  | "faqLine6Active"
  | "faqLine7Active"
  | "faqLine8Active"
  | "faqLine9Active"
  | "faqLine10Active"
  | "faqLine11Active";

const Faq = () => {
  const [questionsView, setQuestionsView] = useState<
    Record<QuestionsKeys, boolean>
  >({
    faqLine1Active: false,
    faqLine2Active: false,
    faqLine3Active: false,
    faqLine4Active: false,
    faqLine5Active: false,
    faqLine6Active: false,
    faqLine7Active: false,
    faqLine8Active: false,
    faqLine9Active: false,
    faqLine10Active: false,
    faqLine11Active: false,
  });
  const handlePlusClick = (
    e: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    const id = e.currentTarget.id as QuestionsKeys;
    setQuestionsView({
      ...questionsView,
      [id]: !questionsView[id],
    });
  };
  return (
    <div className="faq-container">
      <div className="faq-header-container">
        <h2 className="faq-header">FAQ</h2>
        <h3 className="faq-header h3">Ty pytasz, my odpowiadamy</h3>
      </div>
      {questionData.map((e) => {
        if (e.key === "faqLine4Active") {
          return (
            <Question2
              header={e}
              key={e.key}
              stateLine={e.key}
              handler={handlePlusClick}
              state={questionsView}
            />
          );
        } else if (e.key === "faqLine9Active") {
          return (
            <Question3
              header={e}
              key={e.key}
              stateLine={e.key}
              handler={handlePlusClick}
              state={questionsView}
            />
          );
        } else {
          return (
            <Question
              header={e}
              key={e.key}
              stateLine={e.key}
              handler={handlePlusClick}
              state={questionsView}
            />
          );
        }
      })}
      <RedSection />
    </div>
  );
};

export default Faq;
