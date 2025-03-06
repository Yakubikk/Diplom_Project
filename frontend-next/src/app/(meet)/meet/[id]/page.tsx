'use client'

import {useRef, useState} from "react";
import Preview from "./Preview";
import Controls from "./Controls";

export default function Meet() {
    const [cameraEnabled, setCameraEnabled] = useState(true);
    const [microphoneEnabled, setMicrophoneEnabled] = useState(true);
    const streamRef = useRef<MediaStream | null>(null);

    const toggleCamera = async () => {
        if (streamRef.current) {
            const videoTracks = streamRef.current.getVideoTracks();
            videoTracks.forEach((track) => {
                track.enabled = !track.enabled;
            });
            setCameraEnabled(!cameraEnabled);
        }
    };

    const toggleMicrophone = async () => {
        if (streamRef.current) {
            const audioTracks = streamRef.current.getAudioTracks();
            audioTracks.forEach((track) => {
                track.enabled = !track.enabled;
            });
            setMicrophoneEnabled(!microphoneEnabled);
        }
    };

    const handleStream = (stream: MediaStream) => {
        streamRef.current = stream;
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-3xl font-bold mb-8">MyPSU Meet</h1>
            <Preview
                cameraEnabled={cameraEnabled}
                microphoneEnabled={microphoneEnabled}
                onStream={handleStream}
            />
            <Controls
                cameraEnabled={cameraEnabled}
                microphoneEnabled={microphoneEnabled}
                toggleCamera={toggleCamera}
                toggleMicrophone={toggleMicrophone}
            />
        </div>
    );
}
