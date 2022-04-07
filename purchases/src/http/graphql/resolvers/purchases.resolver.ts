import { UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from 'src/http/auth/authorization.guard';
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { PurchasesService } from '../../../services/purchases.service';
import { Purchase } from '../models/purchase';
import { Product } from '../models/product';
import { ProductsService } from '../../../services/products.service';

@Resolver(() => Purchase)
export class PurchasesResolver {
  constructor(
    private purchaseService: PurchasesService,
    private productsService: ProductsService,
  ) {}

  @Query(() => [Purchase])
  @UseGuards(AuthorizationGuard)
  purchases() {
    return this.purchaseService.listAllPurchases();
  }

  @ResolveField(() => Product)
  product(@Parent() purchase: Purchase) {
    return this.productsService.getProductById(purchase.productId);
  }
}
