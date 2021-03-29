import React from "react";
import "./Chats.css";
import Chat from "../Chat/Chat";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Goodwin"
        message="Hey how are you 😃!"
        timestamp="40 seconds ago"
        profilePic="https://store.playstation.com/store/api/chihiro/00_09_000/container/UA/ru/999/EP2402-CUSA05624_00-AV00000000000110/1601168841000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000"
      />
      <Chat
        name="Buddy"
        message="Loooool"
        timestamp="55 minutes ago"
        profilePic="https://avatarko.ru/img/avatar/2/zhivotnye_igra_kot_1816.jpg"
      />
      <Chat
        name="Bagira"
        message="Love you"
        timestamp="2 days ago"
        profilePic="https://instagram.flwo4-2.fna.fbcdn.net/v/t51.2885-15/e35/c0.62.500.500a/161348694_118339980273459_1268838816008777930_n.jpg?tp=1&_nc_ht=instagram.flwo4-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=KM69HN0vJygAX_KD3sl&oh=3bd0338ca4436fce66849dd79216affe&oe=607AAED1"
      />
      <Chat
        name="Afonia "
        message="Tot bé?"
        timestamp="1 week ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_qwuostJVFGWRQCa8dNjSohtZ6SyKKU92eA&usqp=CAU"
      />
    </div>
  );
};

export default Chats;