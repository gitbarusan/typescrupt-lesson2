import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

//functionalCompornentの略で関数コンポーネントの型という事を指定
//FCは暗黙的にchildrenを受け取る　var17までかも
//VFCは暗黙的にchildrenを受け取らない
// export const Text = (props:Props) => {
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  //return <p style={{ color:color, fontSize:fontSize }}>テキストです</p>;
  //名前が同じなら省略出来る
  return <p style={{ color, fontSize }}>テキストです</p>;
};
