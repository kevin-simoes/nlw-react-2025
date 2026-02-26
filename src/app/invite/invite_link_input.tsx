'use client'

import { InputField, InputIcon, InputRoot } from '../../components/input'
import { Link, Copy, MousePointerClick, BadgeCheck, Medal } from 'lucide-react'
import { IconButton } from '../../components/icon-button'

interface InviteLinkInputProps {
    inviteLink: string
}

export function InviteLinkIput({ inviteLink }: InviteLinkInputProps) {
    function copyInviteLink() {
        navigator.clipboard.writeText(inviteLink)
    }


    return(
        <InputRoot>
        <InputIcon>
           <Link className="size-5" />
        </InputIcon>

        <InputField
          readOnly
          defaultValue={inviteLink}
          />
          <IconButton className="-mr-2">
            <Copy className="w-5 h-5" />
          </IconButton>
      </InputRoot>
    )
}