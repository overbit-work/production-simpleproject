import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SimpleEntityModuleBase } from "./base/simpleEntity.module.base";
import { SimpleEntityService } from "./simpleEntity.service";
import { SimpleEntityController } from "./simpleEntity.controller";
import { SimpleEntityResolver } from "./simpleEntity.resolver";

@Module({
  imports: [SimpleEntityModuleBase, forwardRef(() => AuthModule)],
  controllers: [SimpleEntityController],
  providers: [SimpleEntityService, SimpleEntityResolver],
  exports: [SimpleEntityService],
})
export class SimpleEntityModule {}
