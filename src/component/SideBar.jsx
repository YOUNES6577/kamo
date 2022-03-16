import { Navigation } from "react-minimal-side-navigation";
import { useNavigate, useLocation } from "react-router-dom";
// import Icon from "awesome-react-icons";
import { AiFillHome, AiOutlineBulb, AiOutlineUnorderedList, AiOutlinePhone, AiOutlineMail, AiOutlineHome } from "react-icons/ai";
import { ImMap2 } from "react-icons/im";
import React, { useState } from "react";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

const NavSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <React.Fragment>

      <Navigation
        activeItemId={location.pathname}
        onSelect={({ itemId }) => {
          navigate(itemId);
        }}
        items={[
          {
            title: "Home",
            itemId: "/",
            // Optional
            elemBefore: () => <AiOutlineHome name="AiFillHome" />
          },
          {
            title: "Produits",
            itemId: "/Produits",
            elemBefore: () => <AiOutlineUnorderedList name="user" />,
            subNav: [
              {
                title: "Lubirifiants",
                itemId: "/about/Lubirifiants",
                // Optional
                // elemBefore: () => <Icon name="cloud-snow" />
              },
              {
                title: "chimque",
                itemId: "/about/Chimique",
                // elemBefore: () => <Icon name="coffee" />
              },
              {
                title: "Alimentaire",
                itemId: "/about/Alimentaire",
                // elemBefore: () => <Icon name="coffee" />
              },
              {
                title: "Divers",
                itemId: "/about/Divers",
                // elemBefore: () => <Icon name="coffee" />
              }
            ]
          },
          {
            title: "Presentation",
            itemId: "/Presentation",
            elemBefore: () => <AiOutlineBulb name="calendar" />,

          }
        ]}
      />

      <div className="absolute bottom-0 w-full my-8">
        <Navigation
          activeItemId={location.pathname}
          items={[
            {
              title: "Contacts",
              // itemId: "/Contacts",
              elemBefore: () => <AiOutlinePhone name="activity" />,
              subNav: [
                {
                  title: "Contactez Nous",
                  itemId: "/contactezNous",
                  // Optional
                  elemBefore: () => <AiOutlineMail name="calendar" />
                },
                {
                  title: "Venir à Kamoplast",
                  itemId: "/Maps",
                  // Optional
                  elemBefore: () => <ImMap2 name="calendar" />
                }
              ]
            }
          ]}
          onSelect={({ itemId }) => {
            navigate(itemId);
          }}
        />
      </div>
    </React.Fragment>
  );
};
export default NavSidebar;