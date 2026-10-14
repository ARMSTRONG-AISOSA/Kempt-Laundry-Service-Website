import { site } from '@/lib/site';
export default function WhatsAppButton({ variant = 'outline', label = 'WhatsApp us' }: { variant?: 'outline' | 'pale' | 'white'; label?: string }) {
  return (
    <a href={site.whatsapp} target="_blank" rel="noopener" className={'btn btn--' + variant}>
      <span className="wa-dot" />{label}
    </a>
  );
}
