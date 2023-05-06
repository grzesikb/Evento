import { ToastPosition, Toaster } from 'react-hot-toast';

interface IAlert {
  pos?: ToastPosition | undefined;
}

const Alert = (props: IAlert) => {
  return (
    <Toaster
      position={props.pos ? props.pos : 'bottom-center'}
      reverseOrder={false}
      toastOptions={{
        error: {
          style: {
            background: '#272727',
            color: '#fff',
          },
        },
        success: {
          style: {
            background: '#272727',
            color: '#fff',
          },
        },
      }}
    />
  );
};
export default Alert;
