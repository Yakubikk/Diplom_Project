import React from 'react';

interface ControlsProps {
    cameraEnabled: boolean;
    microphoneEnabled: boolean;
    toggleCamera: () => void;
    toggleMicrophone: () => void;
}

const Controls: React.FC<ControlsProps> = (
    {
        cameraEnabled,
        microphoneEnabled,
        toggleCamera,
        toggleMicrophone,
    }) => {
    return (
        <div className="flex space-x-4">
            <button
                onClick={toggleCamera}
                className={`px-6 py-3 rounded-lg ${
                    cameraEnabled ? 'bg-blue-500' : 'bg-red-500'
                } text-white font-semibold`}
            >
                {cameraEnabled ? 'Turn Off Camera' : 'Turn On Camera'}
            </button>
            <button
                onClick={toggleMicrophone}
                className={`px-6 py-3 rounded-lg ${
                    microphoneEnabled ? 'bg-blue-500' : 'bg-red-500'
                } text-white font-semibold`}
            >
                {microphoneEnabled ? 'Turn Off Microphone' : 'Turn On Microphone'}
            </button>
        </div>
    );
};

export { Controls };
export default Controls;
