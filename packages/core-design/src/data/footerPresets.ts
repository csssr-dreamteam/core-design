import { nav, socials, bottomLinks } from './footerLinks'

const video = {
  src: 'https://static.csssr.com/camp-e1d4f932.mp4',
  type: 'video/mp4',
  errorText: 'This browser does not support downloading video files',
}
const email = 'launch@csssr.com'
const addresses = {
  ru: [
    {
      id: 'singapore',
      title: 'Сингапур',
      address: '68 Circular Road,<br> #02-01,<br>Singapore, 049422',
      phone: '+65 3159 4531',
      status: 'Головной офис',
      timeZone: 'Asia/Singapore',
    },
    {
      id: 'russia',
      title: 'Россия',
      address: '22 Большой Козихинский пер.,<br>стр. 2, офис 28,<br> г. Москва, 123001,<br>Россия',
      phone: '+7 (499) 113-16-17',
      timeZone: 'Europe/Moscow',
    },
    {
      id: 'russia_2',
      address: '30 Лесная ул.,<br>стр. 1, офис 303,<br> г. Дзержинский, 140090,<br>Россия',
      phone: '+7 (499) 113-16-17',
      timeZone: 'Europe/Moscow',
    },
    {
      id: 'estonia',
      title: 'Эстония',
      address: '26 Majaka St.,<br>bld.1, office 14,<br>Tallinn, 11412,<br>Estonia',
      timeZone: 'Europe/Tallinn',
    },
  ],
  en: [
    {
      id: 'singapore',
      title: 'Singapore',
      address: '68 Circular Road,<br> #02-01,<br>Singapore, 049422',
      phone: '+65 3159 4531',
      status: 'Head Office',
      timeZone: 'Asia/Singapore',
    },
    {
      id: 'russia',
      title: 'Russia',
      address: "22 Bol'shoj Kozihinskij Lane,<br>bld. 2, office 28,<br> Moscow, 123001,<br>Russia",
      phone: '+7 (499) 113-16-17',
      timeZone: 'Europe/Moscow',
    },
    {
      id: 'russia_2',
      address: '30 Lesnaya St.,<br>bld. 1, office 303,<br> Dzerzhinsky, 140090, <br>Russia',
      phone: '+7 (499) 113-16-17',
      timeZone: 'Europe/Moscow',
    },
    {
      id: 'estonia',
      title: 'Estonia',
      address: '26 Majaka St.,<br>bld.1, office 14,<br>Tallinn, 11412,<br>Estonia',
      timeZone: 'Europe/Tallinn',
    },
  ],
}

const presets = {
  defaultEn: {
    logo: {
      href: 'https://csssr.com/en',
    },
    video,
    email,
    actionPhrase: 'Let’s work together!',
    socialLinks: socials.slice(0, 4),
    nav: nav.en,
    privacyPolicyLink: bottomLinks.en.privacyPolicyLink,
    cookiesPolicyLink: bottomLinks.en.cookiesPolicyLink,
    languageLink: bottomLinks.en.languageLink,
    copyMessage: 'Copied!',
    addresses: addresses.en,
  },
  defaultRu: {
    logo: {
      href: 'https://csssr.com/ru',
    },
    video,
    email,
    actionPhrase: 'Давайте поработаем!',
    socialLinks: socials,
    nav: nav.ru,
    privacyPolicyLink: bottomLinks.ru.privacyPolicyLink,
    allianceLink: bottomLinks.ru.allianceLink,
    languageLink: bottomLinks.ru.languageLink,
    copyMessage: 'Скопировано!',
    addresses: addresses.ru,
  },
}

export default presets
