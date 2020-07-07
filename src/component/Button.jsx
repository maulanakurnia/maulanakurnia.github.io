import React from 'react';
import { Button, Icon} from 'semantic-ui-react';
const ButtonSocial = () => (
  <div>
    <a href="https://www.twitter.com/maulanaakurniaa">
        <Button color='twitter'>
        <Icon name='twitter' /> Twitter
        </Button>
    </a>
    <a href="https://www.github.com/maulanakurnia">
        <Button color='black'>
        <Icon name='github' /> Github
        </Button>
    </a>
    <a href="https://www.instagram.com/maulanaakurniaa">
        <Button>
        <Icon name='instagram' /> Instagram
        </Button>
    </a>
  </div>
)

export default ButtonSocial