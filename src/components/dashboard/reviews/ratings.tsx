import { Flex, Icon } from '@chakra-ui/react';
import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

type RatingNumber = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

export default function Ratings({ rating }: { rating: RatingNumber }) {
    // const roundedRating = Math.round(rating * 2) / 2; // Round to nearest 0.5: (Types has handled this)
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
          stars.push(<Icon key={i} as={FaStar} color="yellow.400" boxSize={6} />);
        } else if (i - rating === 0.5) {
          stars.push(<Icon key={i} as={FaStarHalfAlt} color="yellow.400" boxSize={6} />);
        } else {
          stars.push(<Icon key={i} as={FaStar} color="gray.300" boxSize={6} />);
        }
      }

    return (
        <Flex mb={"2"} gap={"0"}>
            {stars}
        </Flex>
    )
}
