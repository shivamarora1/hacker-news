import extractDomain from "@/helpers/domain";

interface Props {
  url?: string;
}

export default function Domain({ url }: Props) {
  return (
    <>
      {url ? <span>({extractDomain(url)})</span> : ""}
      <style jsx>
        {`
          span {
            font-size: 12px;
            font-weight: 200;
          }
        `}
      </style>
    </>
  );
}
