import React from 'react';
import Button from './Button';
import { PageSubtitle, BodyText } from '../typography';

interface SmallColumnProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
}

export default function SmallColumn({
  title,
  description,
  buttonText,
  buttonHref,
  className = ''
}: SmallColumnProps) {
  return (
    <div className={`dark:bg-[#061C2B] bg-[#E0F0F0] p-8 md:p-12 rounded-lg max-w-[400px] ${className}`}>
      <PageSubtitle className="mb-6 dark:text-[var(--foreground)] text-[#021019]">
        {title}
      </PageSubtitle>
      
      <BodyText className="mb-8 dark:text-[var(--foreground)] text-[#021019]">
        {description}
      </BodyText>

      <Button 
        href={buttonHref}
        className="dark:bg-[var(--foreground)] dark:text-[var(--background)] dark:hover:bg-transparent dark:hover:text-[var(--foreground)] dark:hover:outline-[var(--foreground)] bg-[#021019] text-[#E0F0F0] hover:bg-transparent hover:text-[#021019] hover:outline hover:outline-2 hover:outline-[#021019]"
      >
        {buttonText}
      </Button>
    </div>
  );
} 