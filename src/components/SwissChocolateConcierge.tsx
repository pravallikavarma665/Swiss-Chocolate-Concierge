import React, { useEffect, useRef } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

declare global {
  interface Window {
    openSwissChocolateConcierge?: () => void;
  }
}

export const SwissChocolateConcierge: React.FC = () => {
  const isInitializedRef = useRef<boolean>(false);

  useEffect(() => {
    if (isInitializedRef.current) return;
    isInitializedRef.current = true;

    // Remove any leftover chat container from previous HMR or renders
    const staleContainer = document.getElementById('n8n-chat');
    if (staleContainer) {
      staleContainer.remove();
    }

    try {
      const chatApp = createChat({
        webhookUrl: 'https://pravallika94.app.n8n.cloud/webhook/69aa206f-0c12-42db-b929-b147d699236a/chat',
        mode: 'window',
        showWindowCloseButton: true,
        showWelcomeScreen: false,
        initialMessages: [
          'Grüezi! Welcome to the Swiss Chocolate Cellar.',
          'I am your personal Swiss Chocolate Concierge. How can I assist your tasting journey, cacao pairing, or bespoke gift curation today?'
        ],
        i18n: {
          en: {
            title: 'Swiss Chocolate Concierge',
            subtitle: 'Artisanal Palate Sommelier & Gifting Advisor',
            footer: 'Official Swiss Confectionery Intelligence',
            getStarted: 'Begin Consultation',
            inputPlaceholder: 'Ask about flavors, origins, pairings...',
            closeButtonTooltip: 'Close Concierge'
          }
        }
      });

      // Provide programmatic open helper if needed
      window.openSwissChocolateConcierge = () => {
        const toggleBtn = document.querySelector('.chat-window-toggle') as HTMLElement | null;
        const chatWindow = document.querySelector('.chat-window') as HTMLElement | null;
        if (toggleBtn) {
          if (!chatWindow || chatWindow.style.display === 'none' || getComputedStyle(chatWindow).display === 'none') {
            toggleBtn.click();
          }
        }
      };

      return () => {
        try {
          chatApp?.unmount?.();
          const el = document.getElementById('n8n-chat');
          if (el) el.remove();
          isInitializedRef.current = false;
        } catch {
          // ignore unmount errors if already detached
        }
      };
    } catch (err) {
      console.error('Failed to initialize n8n chat:', err);
    }
  }, []);

  return null;
};
