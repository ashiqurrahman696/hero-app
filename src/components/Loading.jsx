import logo from '../assets/logo.png';

const Loading = () => {
    return (
        <div className="bg-neutral-100 min-h-screen flex justify-center items-center">
            <img src={logo} className="animate-spin w-40" />
        </div>
    );
};

export default Loading;