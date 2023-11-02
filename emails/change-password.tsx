import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

export const LiveblocksChangePassword = () => (
  <Html>
    <Head />
    <Preview>A request has been received to change the password</Preview>
    <Tailwind>
      <Body className="bg-slate-100 font-sans">
        <Container className="bg-white mx-auto px-6 py-10">
          <Section className="px-8">
            <Img
              src="/static/liveblocks-logo.png"
              width="132"
              height="28"
              alt="Liveblocks"
            />
            <Hr className="border-slate-100 my-5" />
            <Heading className="text-slate-600 text-xl font-bold">
              Password change request
            </Heading>
            <Text className="text-slate-600 text-base">
              A request has been received to change the password for your Liveblocks account. 
            </Text>
            <Button
              pX={10}
              pY={10}
              className="bg-[#ff511a] text-white text-base text-center font-bold rounded-md mb-5"
              href="https://liveblocks.io"
            >
              Reset Password
            </Button>
            <Hr className="border-slate-100 my-5" />
            <Text className="text-slate-400 text-xs">
              If you did not make this request, please contact us at support@liveblocks.io
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default LiveblocksChangePassword;