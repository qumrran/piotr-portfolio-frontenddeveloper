
import { IconType } from 'react-icons';
import { Contact } from '../../interfaces';
import { FaFacebook, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";




const contact: Contact[] = [
    {
        id: 1,
        name: "Facebook",
        url: "https://www.facebook.com/piotr.obara.5/",
        icon: FaFacebook
    },
    {
        id: 2,
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
        icon: FaLinkedin
    },
    {
        id: 3,
        name: "Email",
        url: "mailto:pocztapiotrobara@gmail.com",
        icon: MdEmail
    },
    {
        id: 4,
        name: "Telefon",
        url: "tel:+48511132981",
        icon: FaPhoneAlt
    }
];

export default contact;
