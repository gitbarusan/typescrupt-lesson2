import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      {/* join:配列.join("連結文字列")配列の 文字列を（）内の
      連結文字列で繋いで1つも文字列にしてくれる*/}
      {/* hobbiesは渡されない可能性があり、その場合↓だとエラーになる */}
      {/* <dd>{user.hobbies.join(" / ")}</dd> */}
      {/* ?オプショナルチェイニング.で参照するプロパティが無かったらundefindを返すjoinまでいかない */}
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};
