import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
export const loginState = atom({
    key: "loginState",
    default: false,
    effects_UNSTABLE: [persistAtom]
});

export const lastMsg = atom({
    key: "lastMsg",
    default: "",
});

export const createRoom = atom({
    key: "createRoom",
    default: false,
});

export const addMemberCount = atom({
    key: "addMemberCount",
    default: false,
});