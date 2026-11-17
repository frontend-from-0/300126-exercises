"use client";

import { QuoteText } from "@/src/components/typography/QuoteText";
import { Subtitle } from "@/src/components/typography/Subtitle";
import { Button } from "@/src/components/Button";
import { quotes as initialQuotes } from "@/src/quotes";
import { useState } from "react";
import { LikeButton } from "@/src/components/LikeButton";
import { Card } from '@/src/components/Card';

export default function Home() {
  const [quotes, setQuotes] = useState([...initialQuotes]);
  const [index, setIndex] = useState(0);
  const userId = "user_123";
  const isLiked = (quotes[index]?.likedBy as string[])?.includes(userId);

  function handleClick() {
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  }

  function handlePrevClick() {
    setIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
  }

  function handleLikeClick() {
    setQuotes((prevQuotes) => {
      const updatedQuotes = [...prevQuotes];
      const currentQuote = { ...updatedQuotes[index] };
      const currentLikedBy = currentQuote.likedBy || [];

      if (isLiked) {
        currentQuote.likedBy = currentLikedBy.filter((id) => id !== userId);
      } else {
        currentQuote.likedBy = [...currentLikedBy, userId];
      }
      updatedQuotes[index] = currentQuote;
      return updatedQuotes;
    });
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-emerald-100 p-4">
      <Card isLiked={isLiked}
      >
        <div className="absolute top-4 right-4">
          <LikeButton isLiked={isLiked} handleClick={handleLikeClick} />
        </div>

        <div className="flex-1 flex flex-col justify-center pt-8 pb-2 px-2">
          <div className={isLiked ? "italic transition-all duration-300" : ""}>
            <QuoteText>{quotes[index].quote}</QuoteText>
          </div>
          <Subtitle>{quotes[index].author}</Subtitle>
        </div>

        <div className="flex gap-4 justify-center"> 
          <Button
          title="Previous quote"
          handleClick={handlePrevClick}
          className="bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/50"
        />
        <Button
          title="Next quote"
          handleClick={handleClick}
          className="bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/50"
        />
        </div>
        
      </Card>
    </main>
  );
}
