import { Card, Typography } from "@mui/material"
import { OutlinedButton } from "~/components/common/Button"
import { OptionsWrapper } from "../styles"

const Options = () => {
  return (
    <OptionsWrapper>
      <Card className={'optionBlock'}>
        <Typography
          variant="h5"
          gutterBottom
          className={'optionTitle'}
        >
          Become our Community Partner
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          className={'optionInfo'}
        >
          {/* Improved the text and fixed a grammertical issue */}
          If you have any suggestions or ideas that can help us to
          improve how Design and Code functions or operates, also if you
          would like to conduct design sessions, workshops, or meetups, please 
          write to us.
        </Typography>
        <OutlinedButton size="medium" className={'btn'}>
          <Typography variant="h6">Partner with us</Typography>
        </OutlinedButton>
      </Card>
      <Card className={'optionBlock'}>
        <Typography
          variant="h5"
          gutterBottom
          className={'optionTitle'}
        >
          Be our Sponsor
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          className={'optionInfo'}
        > 
          {/* Improved text and fixed grammer. */}
          If you have any suggestions or ideas that can help us to
          improve how Design and Code functions or operates, also if you
          would like to conduct design sessions, workshops, or meetups, please 
          write to us.
        </Typography>
        <OutlinedButton size="medium" className={'btn'}>
          <Typography variant="h6">Sponsor Us</Typography>
        </OutlinedButton>
      </Card>
    </OptionsWrapper>
  )
}

export default Options;