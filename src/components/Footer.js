import React from 'react';

function Footer({ contact }) {
  return (
    <footer className="flex flex-col items-center bg-white py-6 mt-10">
      <div className="flex flex-wrap justify-center gap-6 p-4 mb-4">
        {contact.map((contactItem) => (
          contactItem.name === "Phone" ? (
            <div key={contactItem.id} className="flex items-center text-black gap-2">
              <contactItem.icon className="text-3xl" />
              <span className="text-base font-roboto-condensed">
                +48 511 132 981
              </span>
            </div>
          ) : (
            <a
              key={contactItem.id}
              href={contactItem.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={contactItem.name}
              className="flex items-center text-black hover:text-gray-700 transition-colors gap-2"
            >
              <contactItem.icon className="text-3xl" />
              {contactItem.name === "Email" && (
                <span className="text-base font-roboto-condensed">
                  pocztapiotrobara@gmail.com
                </span>
              )}
            </a>
          )
        ))}
      </div>
      <p className="text-gray-600 font-roboto-condensed text-sm text-center">
        © {new Date().getFullYear()} Piotr Obara. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
