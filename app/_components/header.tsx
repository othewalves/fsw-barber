import Image from "next/image"
import { Card, CardContent } from "./ui/card"

import FSWBarberLogo from "../../public/logo.png"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image
          src={FSWBarberLogo}
          alt="FSW Barber Logotipo"
          width={120}
          height={20}
        />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
