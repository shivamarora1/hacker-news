import Time from "./time";

interface Props {
  score: number;
  by: string;
  time: number;
  kids?: number[] | null;
}

export default function SubText({ score, by, time, kids }: Props) {
  return (
    <>
      <div className="subText">
        <span className="points">{score} points | </span>
        <span className="by">by {by} | </span>
        <span className="time">
          <Time time={time} /> |{" "}
        </span>
        {kids ? <span className="comments">{kids?.length} comments</span> : ""}
      </div>
      <style jsx>
        {`
          .subText {
            font-size: 12px;
            font-weight: 200;
          }
        `}
      </style>
    </>
  );
}
