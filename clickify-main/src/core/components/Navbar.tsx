import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import { Languages } from "@clickify/clickify-common";
import styled from "@emotion/styled";
import { faBook, faDashboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Toolbar, Tooltip, Typography, useTheme } from "@mui/material";

import { AuthPages } from "@/authPage";
import { Sections } from "@/landingPage";
import { useLanguage } from "@/language";
import { AuthStatuses, Pages } from "@/router";
import { routes } from "@/router/Routes";
import { ButtonVariants } from "@/theme";
import { Auth } from "aws-amplify";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useAuthenticator } from "@aws-amplify/ui-react";
import { FullLogo } from "../assets";

const HeaderWrapper = styled(Toolbar)`
  position: fixed;
  width: 100%;
  width: -webkit-fill-available;
  width: -moz-available;
  z-index: 1;

  a {
    text-decoration: none;
  }
`;

const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 480px;
  margin: 0 auto;
`;

const onSignOutClick = async () => {
  await Auth.signOut()
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

export const Navbar: FC = () => {
  const { t } = useTranslation("Core");
  const theme = useTheme();
  const location = useLocation();
  const language = useLanguage();
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  const route = routes[Pages.LANDING_PAGE];

  const [currentSection, setCurrentSection] = useState<Sections | null>(null);

  const onLanguageClick = () => language.change(language.language === Languages.EN ? Languages.FR : Languages.EN);

  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      const { pathname } = location;

      setCurrentSection(pathname !== "/" ? null : (hash.replace("#", "") as Sections));
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <HeaderWrapper style={{ backgroundColor: theme.app.core.navbar.background }}>
        <Link to="/">
          <img src={FullLogo} alt="logo" style={{ marginLeft: 20, width: 112, height: 24 }} />
        </Link>
        <NavBarWrapper>
          {route.sections.map((section: Sections) => (
            <Link reloadDocument key={section} to={`/#${section}`}>
              <Typography fontWeight={currentSection === section ? 700 : 500}>{t(`sections.${section}`)}</Typography>
            </Link>
          ))}
        </NavBarWrapper>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginRight: 20 }}>
          {authStatus === AuthStatuses.AUTHENTICATED ? (
            <>
              <Button variant={ButtonVariants.TEXT} onClick={onSignOutClick}>
                {t("loginButtons.signOff")}
              </Button>
              <Link to={{ pathname: Pages.ACCOUNT_PAGE }}>
                <Button variant={ButtonVariants.PRIMARY}>{t("loginButtons.account")}</Button>
              </Link>
              <Button variant={ButtonVariants.TEXT}>
                <Tooltip title={t("loginButtons.dashboardIconTooltipText")} arrow placement="bottom-start">
                  <FontAwesomeIcon icon={faDashboard} />
                </Tooltip>
              </Button>
            </>
          ) : (
            <>
              <Link to={{ pathname: Pages.AUTH, search: `page=${AuthPages.SIGN_UP}` }}>
                <Button variant={ButtonVariants.TEXT}>{t("loginButtons.signUp")}</Button>
              </Link>
              <Link to={{ pathname: Pages.AUTH, search: `page=${AuthPages.LOGIN} ` }}>
                <Button variant={ButtonVariants.PRIMARY}>{t("loginButtons.login")}</Button>
              </Link>
            </>
          )}
          <Button variant={ButtonVariants.TEXT}>
            <Tooltip title={t("loginButtons.docsIconTooltipText")} arrow placement="bottom-start">
              <FontAwesomeIcon icon={faBook} />
            </Tooltip>
          </Button>
          <Tooltip title={t("languages.switch")} arrow placement="bottom-start">
            <Button variant={ButtonVariants.TEXT} onClick={onLanguageClick}>
              {t("languages.current")}
            </Button>
          </Tooltip>
        </div>
      </HeaderWrapper>
    </>
  );
};
