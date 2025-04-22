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
    <div className={`bg-[#061C2B] p-8 md:p-12 rounded-lg max-w-[400px] ${className}`}>
      <PageSubtitle className="mb-6">
        {title}
      </PageSubtitle>
      
      <BodyText className="mb-8">
        {description}
      </BodyText>

      <Button href={buttonHref}>
        {buttonText}
      </Button>
    </div>
  );
} 