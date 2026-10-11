import HomeVoice from "./media/home.m4a";
import WorkVoice from "./media/work.m4a";
import ServicesVoice from "./media/services.m4a";
import ContactVoice from "./media/contact.m4a";

// One clip per home page section, in page order. The avatar speaks a section's
// clip when that section scrolls into view. `section` is the section's element id.
//
// Until the real avatar is rendered, each clip is a stock voice reading the
// caption (`audio`) over a placeholder frame. To drop in the avatar, add its
// render to ./media and set `video` (MP4, plus `webm` if you have it) and
// `poster` (a still from the clip, shown before it plays and with reduced
// motion). The caption is always shown, so keep it matching what is said.
const CLIPS = [
  {
    section: "home",
    caption: "Hi, I'm Majid. We build responsive, modern web and mobile apps.",
    audio: HomeVoice,
  },
  {
    section: "Selectedwork",
    caption: "Each of these started as a sketch. Tap one to see it running.",
    audio: WorkVoice,
  },
  {
    section: "Services",
    caption: "I take your idea from sketch to the App Store.",
    audio: ServicesVoice,
  },
  {
    section: "Contact",
    caption: "Tell me what it should do, and I will reply with the next steps.",
    audio: ContactVoice,
  },
];

export default CLIPS;
