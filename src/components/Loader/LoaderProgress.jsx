import { ProgressBar } from "react-loader-spinner";

export default function LoaderProgress() {
  return (
    <ProgressBar
      visible={true}
      height="26"
      width="26"
      color="#4fa94d"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}