import { Center, Text } from '@chakra-ui/react';

import notFoundAnimation from '@/src/assets/animations/not_found.json';
import { Player } from '@lottiefiles/react-lottie-player';
import Button from '../ui/button';

interface NotFoundProps {
    title: string;
    message: string;
    buttonText?: string;
    onButtonClick?: () => void;
    }

const NotFound = ({ title, message, buttonText, onButtonClick } : NotFoundProps) => {
  return (
    <Center flexDir={'column'}>
      <Player
        autoplay
        loop
        src={notFoundAnimation}
        style={{ height: '300px', width: '300px' }}
      />
      <Text fontWeight={'bold'} fontSize={'xl'} my={'2'}>
        {title}
      </Text>
      <Text fontSize={'xl'} color="gray">
        {message}
      </Text>
      {buttonText && onButtonClick && (
        <Button variant="primary" my={'3'} size={'lg'} onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </Center>
  );
};

export default NotFound;
