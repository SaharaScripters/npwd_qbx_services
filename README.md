# [NPWD] Services App

External NPWD app for calling service employees, for qbx framework.

## Description

`npwd_qbx_services` is a FiveM script designed for servers using the QBX framework and NPWD as the phone resource. This script allows players to call service employees directly from their phones, enhancing the roleplay experience.

## Requirements

- NPWD v3.15 or higher
- QBX Core

## Install

1. **Download** the `npwd_qbx_services.zip` from releases. **DO NOT CHANGE THE RESOURCE NAME**. If you want to change it, you'll need to download the source code, alter `fetchNui.ts`, and build the project.
2. **Unzip** and add the resource to your server's resources folder.
3. **Ensure** `npwd_qbx_services` **BEFORE** `npwd`.
4. **Add** the app to `NPWD`'s `config.json` in the apps section: `"apps": ["npwd_qbx_services"]`.

## Configuration

The configuration file allows you to customize the script for different jobs. Here’s a detailed explanation:

```lua
--- @class ServerConfig
--- @field jobs table<string, JobConfig> @The configuration for each job.

--- @class JobConfig
--- @field maxContacts number @The maximum number of contacts that can be displayed in the service menu.
--- @field showOffDuty boolean @Whether to show the off-duty contacts in the service menu.

--- @type ServerConfig
return {
  jobs = {
    mechanic = {
      maxContacts = 2,  -- The maximum number of mechanic contacts shown in the service menu
      showOffDuty = false,  -- Whether to display off-duty mechanics in the service menu
    },
    police = {
      maxContacts = 5,  -- The maximum number of police contacts shown in the service menu
      showOffDuty = true,  -- Whether to display off-duty police officers in the service menu
    },
  }
}
```

- **jobs**: This table contains configurations for each job type.
  - **mechanic**: Configuration for mechanics.
    - **maxContacts**: Limits the number of mechanic contacts shown in the service menu to 2.
    - **showOffDuty**: If set to `false`, off-duty mechanics will not be shown in the service menu.
  - **police**: Configuration for police officers.
    - **maxContacts**: Limits the number of police contacts shown in the service menu to 5.
    - **showOffDuty**: If set to `true`, off-duty police officers will be shown in the service menu.

## Usage

Once installed and configured, players can use their NPWD phones to call service employees such as mechanics and police. The service menu will display the available contacts based on your configuration.

## Credits

- [npwd-community](https://github.com/npwd-community) for [npwd_services](https://github.com/npwd-community/npwd_services) (UI from there)
