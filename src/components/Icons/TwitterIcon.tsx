import { SocialIcon } from 'react-social-icons';

export default function TwitterIcon(props: { url: string }) {
  return (
    <SocialIcon
      label='Ftso.eu'
      style={{ height: 25, width: 25 }}
      url={props.url}
    />
  );
}
