import React, { useEffect, useRef } from 'react';

interface PreviewProps {
    cameraEnabled: boolean;
    microphoneEnabled: boolean;
    onStream: (stream: MediaStream) => void;
}

const Preview: React.FC<PreviewProps> = ({ cameraEnabled, microphoneEnabled, onStream }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const enableStream = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: cameraEnabled,
                    audio: microphoneEnabled,
                });

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }

                onStream(stream);
            } catch (err) {
                console.error('Error accessing media devices.', err);
            }
        };

        enableStream();
    }, [cameraEnabled, microphoneEnabled, onStream]);

    return (
        <div className="relative w-full max-w-2xl h-96 bg-gray-800 rounded-lg overflow-hidden mb-8">
            {cameraEnabled ? (
                <video ref={videoRef} autoPlay muted className="w-full h-full object-cover" />
            ) : (
                <div className="flex items-center justify-center w-full h-full bg-gray-700">
                    <span className="text-2xl">Camera is off</span>
                </div>
            )}
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                {microphoneEnabled ? '🎤' : '🔇'}
            </div>
        </div>
    );
};

export { Preview };
export default Preview;
