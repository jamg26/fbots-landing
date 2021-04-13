import React, { useState, Fragment } from "react";
import { Row, Col, Drawer } from "antd";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useTranslation } from "react-i18next";

import SvgIcon from "../../common/SvgIcon";
import Button from "../../common/Button";

import Logo from "../../logo.png";

import * as S from "./styles";

const Header = () => {
  const [isNavVisible] = useState(false);
  const [isSmallScreen] = useState(false);
  const [visible, setVisibility] = useState(false);
  const { t } = useTranslation();

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    return (
      <Fragment>
        <S.CustomNavLinkSmall>
          <a href="https://www.facebook.com/fbotsph/">{t("About")} </a>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall>
          <a href="https://m.me/fbotsph">{t("Messenger")} </a>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall>
          <a href="https://m.me/111353847400439">{t("Demo")} </a>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall>
          <a href="https://play.google.com/store/apps/details?id=com.jamg.fbots">
            {t("Download")}
          </a>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall style={{ width: "180px" }}>
          <a href="https://store.fbots.ml">
            <Button>{t("Control Panel")}</Button>
          </a>
        </S.CustomNavLinkSmall>
      </Fragment>
    );
  };

  return (
    <S.Header>
      <S.Container>
        <Row type="flex" justify="space-between" gutter={20}>
          <Col>
            <S.LogoContainer to="/">
              {/* <SvgIcon src="logo.png" /> */}
              <img src={Logo} width="75px" />
            </S.LogoContainer>
          </Col>
          <S.NotHidden>
            <Col style={{ display: "flex", alignItems: "baseline" }}>
              <MenuItem />
            </Col>
          </S.NotHidden>
          <S.Burger onClick={showDrawer}>
            <S.Outline />
          </S.Burger>
        </Row>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <Drawer closable={false} visible={visible} onClose={onClose}>
            <Col style={{ marginBottom: "2.5rem" }}>
              <S.Label onClick={onClose}>
                <Col span={12}>
                  <S.Menu>Menu</S.Menu>
                </Col>
                <Col span={12}>
                  <S.Outline padding="true" />
                </Col>
              </S.Label>
            </Col>
            <MenuItem />
          </Drawer>
        </CSSTransition>
      </S.Container>
    </S.Header>
  );
};

export default Header;
