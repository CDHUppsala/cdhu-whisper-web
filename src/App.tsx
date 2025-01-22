import { AudioManager } from "./components/AudioManager";
import Transcript from "./components/Transcript";
import { useTranscriber } from "./hooks/useTranscriber";

// @ts-ignore
//const IS_WEBGPU_AVAILABLE = !!navigator.gpu;

function App() {
    const transcriber = useTranscriber();

    return /*IS_WEBGPU_AVAILABLE ?*/ (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='container flex flex-col justify-center items-center'>
                <img src="/logo.png" alt="logo" style={{ width: '50%' }} />
                <h1 className='text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl text-center'>
                    CDHU Whisper
                </h1>
                <h2 className='mt-3 mb-5 px-4 text-center text-1xl font-semibold tracking-tight text-slate-900 sm:text-2xl'>
                    Click 'From file' and choose an audio file to transcribe.<br /> Click the cog on the bottom right corner to change models.
                </h2>
                <AudioManager transcriber={transcriber} />
                <Transcript transcribedData={transcriber.output} />
            </div>

            <div className='absolute bottom-4'>
                Uppsala University - {" "}
                <a
                    className='underline'
                    href='https://www.uu.se/en/centre/digital-humanities-and-social-sciences'
                >
                    CDHU
                </a>
            </div>
        </div>
    ); /*: (
        <div className='fixed w-screen h-screen bg-black z-10 bg-opacity-[92%] text-white text-2xl font-semibold flex justify-center items-center text-center'>
            WebGPU is not supported
            <br />
            by this browser :&#40;
        </div>
    );*/
}

export default App;
