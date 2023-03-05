import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <div>
    <Container>
      <Div1>
        <Link href="/">
        <a style={{display:"flex", alignItems:"center", color:"white"}}><DiCssdeck size="3rem" /><Span>tanujbhatt.in</Span></a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="/">
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/project">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <NavLink>Blog</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/tanuj830">
          <AiFillGithub />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/tanuj-bhatt-85a2511b5/">
          <AiFillLinkedin />
        </SocialIcons>
        <SocialIcons href="https://leetcode.com/tanujdotcpp/">
          <SiLeetcode />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/aka_tanuj/">
          <AiFillInstagram />
        </SocialIcons>
      </Div3>
  </Container>
  </div>
);

export default Header;
