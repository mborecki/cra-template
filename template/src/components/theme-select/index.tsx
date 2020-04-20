import React from 'react';
import { Label, Dropdown } from 'semantic-ui-react';
import { useThemeList, useThemeName, useThemeDispach } from '../../themes';

export default function ThemeSelect() {

    const themeList = useThemeList();
    const themeName = useThemeName();
    const dispach = useThemeDispach();

    return (
        <Label>
            Theme: {themeName}
            <Dropdown>
                <Dropdown.Menu>
                    {
                        themeList.map(i => {
                            return (
                                <Dropdown.Item onClick={() => dispach(i)}>
                                    {i}
                                </Dropdown.Item>
                            )
                        })
                    }
                </Dropdown.Menu>
            </Dropdown>
        </Label>
    )
}
