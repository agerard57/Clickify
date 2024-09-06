import React, { FC, ReactNode, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation } from "react-router-dom";

import { useConstants } from "@/constants";
import { LoadingScreen } from "@/loadingScreen";
import { TypographyVariants } from "@/theme";
import styled from "@emotion/styled";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Typography, useTheme } from "@mui/material";

import { MainModels } from "@clickify/clickify-common";
import { AccountSubPages } from "../typings";
import { getCompanyData } from "../services";

const LinksArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

interface LinkBoxProps {
  selected?: boolean;
  children: ReactNode;
}

const LinkBox: FC<LinkBoxProps> = ({ selected = false, children }) => (
  <div
    style={{
      padding: "14px 0 14px 12px",
      borderRadius: 6,
      cursor: "pointer",
      backgroundColor: selected ? "rgba(199,208,242,0.75)" : "#FFF",
      width: 240,
    }}
  >
    {children}
  </div>
);

export const AccountLayout: FC = () => {
  const { t } = useTranslation("AccountPage");
  const appConstants = useConstants();
  const theme = useTheme();
  const location = useLocation();
  const [companyData, setCompanyData] = useState<MainModels["Companies"] | undefined>(undefined); // TODO Fix this since we don't have a transformer yet
  const [isLoading, setIsLoading] = useState(false);

  const accountLayoutTheme = theme.app.accountPage.accountLayout;

  // TODO putting /deez will result in a white page,
  // maybe check if included in enum list or undefined
  const currentPage = location.pathname.split("/account/")[1] as AccountSubPages;

  useEffect(() => {
    // This reloads the page since it loads a new one,
    // instead of relying on Router's location push
    if (currentPage === undefined) window.location.href = `/account/${appConstants.accountPage.subPages[0]}`;
  }, [currentPage]);

  useEffect(() => {
    setIsLoading(true);
    getCompanyData().then((data) => {
      setCompanyData(data);
      setIsLoading(false);
    });
  }, []);

  return currentPage === undefined || isLoading ? (
    <LoadingScreen />
  ) : (
    <div style={{ margin: "100px 40px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <Typography variant={TypographyVariants.SMALL_TITLE}>
          {t("title", { user: companyData?.tradingName })}
        </Typography>
        <Typography
          variant={TypographyVariants.INPUT_LABEL}
          style={{ textAlign: "right", color: accountLayoutTheme.descriptionColor }}
        >
          {t(`${currentPage}.description`)}
        </Typography>
      </div>
      <Divider flexItem style={{ color: accountLayoutTheme.dividerColor, margin: "15px 0 30px 0" }} />
      <div style={{ display: "flex" }}>
        <LinksArea style={{ display: "flex", flexDirection: "column" }}>
          {appConstants.accountPage.subPages.map((subPage) => {
            const selected = subPage === currentPage;

            return (
              <StyledLink key={subPage} to={subPage}>
                <LinkBox selected={selected}>
                  <Typography
                    variant={TypographyVariants.SECTION_TITLE}
                    style={{
                      fontWeight: selected
                        ? accountLayoutTheme.selectedFontWeight
                        : accountLayoutTheme.unselectedFontWeight,
                    }}
                  >
                    {t(`${subPage}.title`)}
                  </Typography>
                </LinkBox>
              </StyledLink>
            );
          })}
          <LinkBox>
            <StyledLink to={"TODO BACKOFFICE"}>
              <Typography
                variant={TypographyVariants.SECTION_TITLE}
                style={{ fontWeight: accountLayoutTheme.unselectedFontWeight }}
              >
                {t("backOffice")}
              </Typography>
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                size="xs"
                style={{ paddingLeft: 10, color: accountLayoutTheme.externalIconColor }}
              />
            </StyledLink>
          </LinkBox>
          <LinkBox>
            <StyledLink to={"TODO"}>
              <Typography
                variant={TypographyVariants.SECTION_TITLE}
                style={{
                  fontWeight: accountLayoutTheme.unselectedFontWeight,
                  color: accountLayoutTheme.closeButtonColor,
                }}
              >
                {t("close.title")}
              </Typography>
            </StyledLink>
          </LinkBox>
        </LinksArea>
        <div style={{ margin: "0 auto" }}>
          <Outlet context={[companyData, setCompanyData]} />
        </div>
      </div>
    </div>
  );
};
