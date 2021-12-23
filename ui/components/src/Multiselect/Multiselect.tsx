/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Label, Checkbox } from 'theme-ui';
import { Popover, PopoverProps } from '../Popover';

export interface MultiselectItem {
  /**
   * item label
   */
  label: string;
  /**
   * selected state
   */
  selected: boolean;
}
export interface MultiselectOwnProps {
  /**
   * array of items to select from
   */
  items: MultiselectItem[];
  /**
   * function called when the selected state of an item changes
   */
  onChange: (item: MultiselectItem) => void;
}

export type MultiselectProps = MultiselectOwnProps &
  Omit<PopoverProps, 'tooltip'>;

/**
 * Popover multiselect displaying checkboxes to select/unselect.
 */
export const Multiselect: FC<MultiselectProps> = ({
  items,
  onChange,
  ...props
}) => {
  return (
    <Popover
      trigger={['click']}
      {...props}
      tooltip={() => (
        <Box variant="multiselect.container">
          {items.map(item => (
            <Box key={`multi_select_${item.label}`} variant="multiselect.item">
              <Label>
                <Checkbox
                  onChange={() => onChange(item)}
                  checked={item.selected}
                />
                {item.label}
              </Label>
            </Box>
          ))}
        </Box>
      )}
    />
  );
};
