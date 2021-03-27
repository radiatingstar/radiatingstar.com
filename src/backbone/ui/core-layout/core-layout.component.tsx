import React, { FunctionComponent, ReactElement } from "react"
import { Logo } from "../../../branding"
import { mainNavigation } from "../../main-navigation-items"
import { Header } from "../header/header.component"
import { MainNavigation } from "../main-navigation/main-navigation.component"

interface Properties {
  navigation?: ReactElement
}

export const CoreLayout: FunctionComponent<Properties> = ({
  children,
  navigation = <MainNavigation navigation={mainNavigation} />,
}) => {
  return (
    <div>
      <Header logoSlot={<Logo />} navigationSlot={navigation} />
      <main>{children}</main>
    </div>
  )
}
