import {redirect} from 'next/navigation';

type Props = { params: Promise<{ locale: string }> };

export default async function BriefsRedirect({ params }: Props) {
  const { locale } = await params;
  redirect(`/${locale === 'no' ? 'no/publikasjoner' : 'en/publications'}`);
}
