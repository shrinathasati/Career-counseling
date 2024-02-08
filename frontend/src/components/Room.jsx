import { useParams } from "react-router-dom";
import { appId,serverScret } from "./Config";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const { roomId } = useParams();

    const meeting = (element) => {
        const token = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverScret, roomId, "0", "Name");
        const zc = ZegoUIKitPrebuilt.create(token);
        zc.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton: false,
            sharedLinks: [{
                name: "Copy Link",
                url:window.location.href
            }]
        });
    }
    return (
        <div ref={meeting} className="w-[100vw] h-[100vh]">
             Room Id : {roomId}
        </div>
    )
}
export default Room;