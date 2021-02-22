/** @jsx jsx */
import { FC, useMemo, useState } from 'react';
import { jsx, Box, Card, Themed, Image, Button } from 'theme-ui';
import { MarkGithubIcon } from '@primer/octicons-react';
import { Link, Multiselect } from '@component-controls/components';
import { TagsList } from '@component-controls/blocks';
import { useDocByType } from '@component-controls/store';

export const Showcase: FC = () => {
  const showcase = useDocByType('showcase');
  const [selected, setSelected] = useState<string[]>([]);
  const { tags, sites } = useMemo(() => {
    const sites = showcase
      .filter(doc => doc.route !== '/showcase')
      .sort((d1, d2) => d1.title.localeCompare(d2.title));
    const tags = sites.reduce((acc, site) => {
      site.tags.forEach(tag => {
        if (!acc.includes(tag)) {
          acc.push(tag);
        }
      });
      return acc;
    }, []);
    return { tags, sites };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showcase.length]);
  const filtered = useMemo(() => {
    return selected.length
      ? sites.filter(site => site.tags?.find(tag => selected.includes(tag)))
      : sites;
  }, [sites, selected]);
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 4,
        }}
      >
        <Themed.h4>{`${filtered.length}/${sites.length}`}</Themed.h4>
        <Multiselect
          items={tags.map(tag => ({
            label: tag,
            selected: selected.includes(tag),
          }))}
          onChange={item => {
            if (selected.includes(item.label)) {
              setSelected(selected.filter(tag => tag !== item.label));
            } else {
              setSelected([...selected, item.label]);
            }
          }}
        >
          <Box
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <Box sx={{ pr: 1 }}>filter:</Box>
            <Button>
              {selected.length === 0 ? 'all tags' : selected.join(', ')}
            </Button>
          </Box>
        </Multiselect>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fill,minmax(420px,1fr))`,
          columnGap: 4,
          rowGap: 5,
        }}
      >
        {filtered.map(doc => (
          <Card key={doc.title}>
            <Link href={doc.link}>
              <Image src={doc.image} />
            </Link>
            <TagsList
              tags={doc.tags}
              sx={{ fontSize: 0, lineHeight: '1rem' }}
              limit={-1}
            />
            <Link href={doc.link}>
              <Themed.h3>{doc.title}</Themed.h3>
            </Link>
            <p>{doc.description}</p>

            <Link href={doc.repo}>
              <MarkGithubIcon /> source
            </Link>
          </Card>
        ))}
      </Box>
    </div>
  );
};
