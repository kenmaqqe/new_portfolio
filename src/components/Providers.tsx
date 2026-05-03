"use client";

import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import type { Messages } from "next-intl";

interface ProvidersProps {
  children: ReactNode;
  locale: string;
  messages: Messages;
}

export default function Providers({ children, locale, messages }: ProvidersProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
