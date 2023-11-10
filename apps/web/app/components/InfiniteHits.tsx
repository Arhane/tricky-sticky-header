import React, { useEffect, useRef, useCallback } from "react";
import { useInfiniteHits } from "react-instantsearch-hooks-web";
import { Grid, AutoSizer, ScrollParams } from "react-virtualized";

export function InfiniteHits({ hitComponent: HitComponent, ...props }: any) {
  const rowHeight = 180;
  const columnCount = 3;
  const { hits, isLastPage, showMore } = useInfiniteHits(props);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isLastPage) {
          showMore();
        }
      });
    });

    if (sentinelRef.current !== null) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isLastPage, showMore]);

  const renderCell = useCallback(
    ({ columnIndex, key, rowIndex, style }: any) => {
      const index = rowIndex * columnCount + columnIndex;
      const hit = hits[index];

      return (
        <div key={hit.objectID} className="ais-InfiniteHits-item" style={style}>
          <HitComponent hit={hit} />
        </div>
      );
    },
    [hits]
  );

  const onScroll = useCallback(
    ({ scrollTop, clientHeight, scrollHeight }: ScrollParams) => {
      const isEnd =
        clientHeight + scrollTop >= scrollHeight - rowHeight * rowHeight;

      const isFirstRender = hits.length === 0 && isLastPage;

      if (!isLastPage && isEnd) {
        showMore();
      }
    },
    [isLastPage, showMore]
  );

  return (
    <div className="ais-InfiniteHits">
      <AutoSizer defaultHeight={600} disableHeight>
        {({ height, width }) => (
          <Grid
            height={height ?? 600}
            rowCount={hits.length / columnCount}
            width={width}
            columnWidth={width / columnCount}
            rowHeight={rowHeight}
            columnCount={columnCount}
            cellRenderer={renderCell}
            className="ais-InfiniteHits-list"
            onScroll={onScroll}
          />
        )}
      </AutoSizer>
    </div>
  );
}
