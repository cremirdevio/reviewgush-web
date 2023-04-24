import {
  Table,
  TableContainer,
  Tbody,
  Tfoot,
  Thead,
  useBreakpointValue,
  SimpleGrid,
} from "@chakra-ui/react";
import SingleReviewTableItem from "./single-review-table-item";
import ReviewTableHeader from "./review-table-head";
import SingleReviewCard from "./single-review-card";

type ListReviewsVariant = "table" | "grid";
// interface ListReviewsProp {
//   variant?: ListReviewsVariant;
// }

export default function ListReviews() {
  const columns = useBreakpointValue(
    { base: 1, sm: 1, md: 2 },
    { fallback: `md` }
  );
  const variant = useBreakpointValue<ListReviewsVariant>({
    base: `grid`,
    lg: `table`,
  });

  console.log(variant);
  if (variant == `grid`) {
    return (
      <SimpleGrid columns={columns} spacing={10}>
        <SingleReviewCard />
        <SingleReviewCard />
        <SingleReviewCard />
        <SingleReviewCard />
      </SimpleGrid>
    );
  }
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <ReviewTableHeader />
        </Thead>
        <Tbody>
          <SingleReviewTableItem />
          <SingleReviewTableItem />
          <SingleReviewTableItem />
          <SingleReviewTableItem />
        </Tbody>
        <Tfoot>
          <ReviewTableHeader />
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
